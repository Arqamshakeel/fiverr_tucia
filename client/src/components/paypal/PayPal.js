import React, { useRef, useEffect } from "react";
import SnackBar from "../snackBar/SuccessSnackBar";
import SuccessSnackBar from "../snackBar/SuccessSnackBar";
export default function Paypal(props) {
  const paypal = useRef();
  const [sucessOpen, setSucessOpen] = React.useState(false);

  const [sucessMsg, setSucessMsg] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: props.selectedPricing.catergory,
                amount: {
                  currency_code: "USD",
                  value: props.selectedPricing.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          console.log(order.status);
          if (order.status === "COMPLETED") {
            props.uploadFinalOrder();
            setSucessOpen(true);
            setSucessMsg("Payment Successful, your order has been sent!");
          }
        },
        onError: (err) => {
          console.log(err);
          setOpen(true);
          setmsg("There was error making transaction. Order not sent!");
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <SuccessSnackBar
        open={sucessOpen}
        setOpen={setSucessOpen}
        msg={sucessMsg}
      />
      <SnackBar open={open} setOpen={setOpen} msg={msg} />
      <div ref={paypal}></div>
    </div>
  );
}
