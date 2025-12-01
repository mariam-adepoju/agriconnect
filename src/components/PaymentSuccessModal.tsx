import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface PaymentSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center gap-2 text-green-600">
            <CheckCircle className="w-12 h-12" />
            Payment Successful
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Your payment was processed successfully. Thank you for your
            purchase!
          </DialogDescription>
        </DialogHeader>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
        >
          Continue
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentSuccessModal;
