import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-30 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
}
