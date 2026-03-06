export const generateWhatsAppLink = (message: string = "Hi, I'd like to book a consultation") => {
  const phoneNumber = "1234567890";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (message?: string) => {
  window.open(generateWhatsAppLink(message), "_blank");
};
