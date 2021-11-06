interface IMailTo {
   name: string;
   email: string;
}

interface IMailMessage {
   subject: string;
   body: string;
   attachment?: string[]; // ?: pq é opcional // e string[] significa um array de strings (Poderia ser tbm: Array<string>)
}


class EmailService {
   sendMail(to: IMailTo, message: IMailMessage) {
      console.log(`Email enviado para ${to.name}: ${message.subject}`);
   }
}

export default EmailService;