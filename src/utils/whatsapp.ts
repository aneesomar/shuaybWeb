export const generateWhatsAppLink = (message: string = "Hi, I'd like to book a consultation with Shuayb Omar Physiotherapy.") => {
  const phoneNumber = "27832867055";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (message?: string) => {
  window.open(generateWhatsAppLink(message), "_blank");
};
