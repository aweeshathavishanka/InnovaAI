import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY!);

export async function POST(req: NextRequest) {
  //webhook functinality

  const payload = await req.text();

  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({
      status: "Failed",
      error: "Missing Stripe signature header",
    });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_KEY!
    );
    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        console.log({ paymentIntentSucceeded });
        break;

      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["payment_intent"],
          }
        );
        console.log({ session });

        //connect to the db create or update db
        break;
      }
      case "customer.subscription.deleted": {
        //connect to the db create or update db
        const subscriptionId = event.data.object.id;
        const subscription = await stripe.subscriptions.retrieve(
          subscriptionId
        );
        console.log({ subscription });

        //connect to db
        //update the user subscription status to cancelled
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err: any) {
    return NextResponse.json({ status: "Failed", error: err.message });
  }

  return NextResponse.json({
    message: "Payment successful",
    status: "success",
  });
}
