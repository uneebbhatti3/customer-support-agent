import type { OrderStatus } from "../generated/prisma/enums.ts";
import { db } from "../src/db.ts";

type SeedOrder = {
  orderNumber: number;
  product: string;
  status: OrderStatus;
  daysAgo: number;
  carrier?: string; // optional: set both to use exact values (e.g. for the demo)
  trackingNumber?: string;
};

type SeedCustomer = {
  name: string;
  email: string;
  phone: string; // digits only; customers verify with the last 4
  orders: SeedOrder[];
};

// Sara and James are the demo customers used on the slides. Keep them first.
const customers: SeedCustomer[] = [
  {
    name: "Sara Ahmed",
    email: "sara@example.com",
    phone: "03005551234",
    orders: [
      {
        orderNumber: 4512,
        product: "Wireless Earbuds",
        status: "SHIPPED",
        daysAgo: 3,
        carrier: "TCS",
        trackingNumber: "TCS-88412093",
      },
      {
        orderNumber: 4513,
        product: "Mechanical Keyboard",
        status: "DELIVERED",
        daysAgo: 14,
      },
      {
        orderNumber: 4514,
        product: "Laptop Sleeve",
        status: "PENDING",
        daysAgo: 0,
      },
    ],
  },
  {
    name: "James Carter",
    email: "james@example.com",
    phone: "4155550199",
    orders: [
      {
        orderNumber: 5120,
        product: "Laptop Stand",
        status: "SHIPPED",
        daysAgo: 2,
      },
      {
        orderNumber: 5121,
        product: "Phone Case",
        status: "CANCELLED",
        daysAgo: 20,
      },
    ],
  },
  {
    name: "Ayesha Khan",
    email: "ayesha@example.com",
    phone: "03215552048",
    orders: [
      {
        orderNumber: 5201,
        product: "Smart Watch",
        status: "DELIVERED",
        daysAgo: 9,
      },
      {
        orderNumber: 5202,
        product: "Watch Strap",
        status: "SHIPPED",
        daysAgo: 1,
      },
    ],
  },
  {
    name: "Bilal Hussain",
    email: "bilal@example.com",
    phone: "03335553317",
    orders: [
      {
        orderNumber: 5301,
        product: "Gaming Mouse",
        status: "PENDING",
        daysAgo: 0,
      },
    ],
  },
  {
    name: "Emily Johnson",
    email: "emily@example.com",
    phone: "2125554821",
    orders: [
      {
        orderNumber: 5401,
        product: "Noise-Cancelling Headphones",
        status: "DELIVERED",
        daysAgo: 30,
      },
      {
        orderNumber: 5402,
        product: "Headphone Case",
        status: "DELIVERED",
        daysAgo: 28,
      },
      {
        orderNumber: 5403,
        product: "USB-C Charger",
        status: "SHIPPED",
        daysAgo: 2,
      },
    ],
  },
  {
    name: "Hamza Ali",
    email: "hamza@example.com",
    phone: "03455556602",
    orders: [
      {
        orderNumber: 5501,
        product: "Portable SSD 1TB",
        status: "SHIPPED",
        daysAgo: 4,
      },
    ],
  },
  {
    name: "Fatima Noor",
    email: "fatima@example.com",
    phone: "03015557719",
    orders: [
      {
        orderNumber: 5601,
        product: "Electric Kettle",
        status: "DELIVERED",
        daysAgo: 6,
      },
      {
        orderNumber: 5602,
        product: "Coffee Grinder",
        status: "CANCELLED",
        daysAgo: 12,
      },
    ],
  },
  {
    name: "Daniel Smith",
    email: "daniel@example.com",
    phone: "3125558830",
    orders: [
      {
        orderNumber: 5701,
        product: "Webcam 1080p",
        status: "PENDING",
        daysAgo: 1,
      },
    ],
  },
  {
    name: "Zainab Raza",
    email: "zainab@example.com",
    phone: "03125559945",
    orders: [
      {
        orderNumber: 5801,
        product: "Yoga Mat",
        status: "DELIVERED",
        daysAgo: 18,
      },
      {
        orderNumber: 5802,
        product: "Resistance Bands",
        status: "SHIPPED",
        daysAgo: 3,
      },
    ],
  },
  {
    name: "Usman Tariq",
    email: "usman@example.com",
    phone: "03075551056",
    orders: [
      {
        orderNumber: 5901,
        product: "27-inch Monitor",
        status: "SHIPPED",
        daysAgo: 5,
      },
    ],
  },
  {
    name: "Olivia Brown",
    email: "olivia@example.com",
    phone: "6175552167",
    orders: [
      {
        orderNumber: 6001,
        product: "Desk Lamp",
        status: "DELIVERED",
        daysAgo: 11,
      },
      {
        orderNumber: 6002,
        product: "Notebook Set",
        status: "DELIVERED",
        daysAgo: 11,
      },
    ],
  },
  {
    name: "Ali Raza",
    email: "ali@example.com",
    phone: "03235553278",
    orders: [
      {
        orderNumber: 6101,
        product: "Bluetooth Speaker",
        status: "CANCELLED",
        daysAgo: 7,
      },
    ],
  },
  {
    name: "Mariam Siddiqui",
    email: "mariam@example.com",
    phone: "03335554389",
    orders: [
      {
        orderNumber: 6201,
        product: "Hair Dryer",
        status: "SHIPPED",
        daysAgo: 2,
      },
      {
        orderNumber: 6202,
        product: "Travel Pouch",
        status: "PENDING",
        daysAgo: 0,
      },
    ],
  },
  {
    name: "Michael Lee",
    email: "michael@example.com",
    phone: "4085555490",
    orders: [
      {
        orderNumber: 6301,
        product: "Graphics Tablet",
        status: "DELIVERED",
        daysAgo: 22,
      },
    ],
  },
  {
    name: "Hira Javed",
    email: "hira@example.com",
    phone: "03465556501",
    orders: [
      { orderNumber: 6401, product: "Sneakers", status: "SHIPPED", daysAgo: 3 },
      {
        orderNumber: 6402,
        product: "Running Socks",
        status: "SHIPPED",
        daysAgo: 3,
      },
    ],
  },
  {
    name: "Omar Farooq",
    email: "omar@example.com",
    phone: "03005557612",
    orders: [
      {
        orderNumber: 6501,
        product: "Power Bank 20000mAh",
        status: "DELIVERED",
        daysAgo: 8,
      },
    ],
  },
  {
    name: "Sophia Martinez",
    email: "sophia@example.com",
    phone: "3055558723",
    orders: [
      {
        orderNumber: 6601,
        product: "Air Fryer",
        status: "PENDING",
        daysAgo: 1,
      },
      {
        orderNumber: 6602,
        product: "Cookbook",
        status: "DELIVERED",
        daysAgo: 25,
      },
    ],
  },
  {
    name: "Kashif Mehmood",
    email: "kashif@example.com",
    phone: "03215559834",
    orders: [
      {
        orderNumber: 6701,
        product: "Router (Wi-Fi 6)",
        status: "SHIPPED",
        daysAgo: 6,
      },
    ],
  },
  {
    name: "Noor Fatima",
    email: "noor@example.com",
    phone: "03135550945",
    orders: [
      {
        orderNumber: 6801,
        product: "Backpack",
        status: "DELIVERED",
        daysAgo: 15,
      },
      {
        orderNumber: 6802,
        product: "Water Bottle",
        status: "CANCELLED",
        daysAgo: 13,
      },
    ],
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    phone: "2065551256",
    orders: [
      {
        orderNumber: 6901,
        product: "Office Chair",
        status: "SHIPPED",
        daysAgo: 4,
      },
    ],
  },
  {
    name: "Sana Iqbal",
    email: "sana@example.com",
    phone: "03365552367",
    orders: [
      {
        orderNumber: 7001,
        product: "Mobile Phone Stand",
        status: "DELIVERED",
        daysAgo: 10,
      },
      {
        orderNumber: 7002,
        product: "Screen Protector",
        status: "PENDING",
        daysAgo: 0,
      },
    ],
  },
  {
    name: "Ahmed Shah",
    email: "ahmed@example.com",
    phone: "03025553478",
    orders: [
      {
        orderNumber: 7101,
        product: "Electric Toothbrush",
        status: "SHIPPED",
        daysAgo: 1,
      },
    ],
  },
];

// Carrier name → tracking number prefix.
const CARRIERS: Record<string, string> = {
  TCS: "TCS",
  Leopards: "LCS",
  DHL: "DHL",
  FedEx: "FDX",
  "M&P": "MNP",
};
const CARRIER_NAMES = Object.keys(CARRIERS);

/** A date `days` days before now, so the data always looks recent. */
function daysAgo(days: number): Date {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

/** Shipped and delivered orders get a carrier and tracking number; others don't. */
function shippingFor(order: SeedOrder) {
  if (order.status !== "SHIPPED" && order.status !== "DELIVERED") {
    return { carrier: null, trackingNumber: null };
  }

  // Pick a carrier from the order number so the data is varied but always the same.
  const carrier =
    order.carrier ?? CARRIER_NAMES[order.orderNumber % CARRIER_NAMES.length]!;
  const trackingNumber =
    order.trackingNumber ?? `${CARRIERS[carrier]}-88${order.orderNumber}`;

  return { carrier, trackingNumber };
}

async function main() {
  // Empty the tables and restart IDs at 1, so Sara is always customer 1.
  await db.$executeRaw`TRUNCATE TABLE "Ticket", "Order", "Customer" RESTART IDENTITY CASCADE`;

  for (const customer of customers) {
    await db.customer.create({
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        orders: {
          create: customer.orders.map((order) => ({
            orderNumber: order.orderNumber,
            product: order.product,
            status: order.status,
            placedAt: daysAgo(order.daysAgo),
            ...shippingFor(order),
          })),
        },
      },
    });
  }

  const orderCount = customers.reduce(
    (total, customer) => total + customer.orders.length,
    0,
  );
  console.log(`Seeded ${customers.length} customers and ${orderCount} orders.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
