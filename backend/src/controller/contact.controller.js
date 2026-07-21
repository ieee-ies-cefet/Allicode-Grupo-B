import { contactService } from "../service/contact.service.js";

export async function sendContactEmail(req, res) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            error: "Todos os campos são obrigatórios"
        });
    }

    try {
        await contactService(name, email, message);

        return res.status(200).json({
            message: "E-mail enviado com sucesso"
        });
    } catch (error) {
        return res.status(500).json({
            error: "Erro ao enviar e-mail"
        });
    }
}