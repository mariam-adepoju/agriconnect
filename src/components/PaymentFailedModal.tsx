import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { XCircle } from "lucide-react";

interface PaymentFailedModalProps {
  open: boolean;
  onClose: () => void;
}

const PaymentFailedModal: React.FC<PaymentFailedModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center gap-2 text-red-600">
            <XCircle className="w-12 h-12" />
            Payment Failed
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Something went wrong while processing your payment. Please try
            again.
          </DialogDescription>
        </DialogHeader>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentFailedModal;
