import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.TOKEN;

// Buat instance bot TAPI tanpa polling
const bot = new TelegramBot(TOKEN);

// Fungsi utama serverless Vercel
export default async function handler(req, res) {
    if (req.method === "POST") {
        // terima update
        await bot.processUpdate(req.body);
        return res.status(200).send("OK");
    }

    res.status(200).json({ status: "Bot jalan" });
}
