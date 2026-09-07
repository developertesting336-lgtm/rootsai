// Stub email utilities
export const sendEmail = async (to: string, subject: string, html: string) => {
  console.log('Email would be sent to:', to);
  return { success: true };
};

export const getMagicLinkEmailTemplate = (link: string) => {
  return `<p>Click here to sign in: <a href="${link}">${link}</a></p>`;
};
