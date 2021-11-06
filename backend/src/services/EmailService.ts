interface IMailTo {
   name: string;
   email: string;
}

interface IMailMessage {
   subject: string;
   body: string;
   attachment?: string[]; // ?: pq é opcional // e string[] significa um array de strings (Poderia ser tbm: Array<string>)
}

interface IMessageDTO {
   to: IMailTo;
   message: IMailMessage;
}

// DTO -> Data Transfer Object (DDD Methodology)
class EmailService {
   sendMail({ to, message }: IMessageDTO) {
      console.log(`Email enviado para ${to.name}: ${message.subject}`);
   }
}

export default EmailService;