export const createSupportTicketConfig = {
  name: "create_support_ticket",
  description:
    "Opens a support ticket so a human follows up, e.g. for a damaged item or a missing delivery. " +
    "This saves to the database. Only works after get_customer has succeeded.",
};

export const getOrderConfig = {
  name: "get_order",
  description:
    "Gets the status and shipping details of one order belonging to the verified customer. " +
    "Only works after get_customer has succeeded.",
};

export const getCustomerConfig = {
  name: "get_customer",
  description:
    "Verifies the customer. Call this first, before looking up orders or opening tickets. " +
    "Needs their email and the last 4 digits of their phone number. Never guess these; ask the customer.",
};
