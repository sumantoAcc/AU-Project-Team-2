package com.au.discussionforum;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.*;


import java.io.IOException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.junit.Rule;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.test.context.ActiveProfiles;

import com.au.discussionforum.service.EmailService;
import com.icegreen.greenmail.util.GreenMail;

@SpringBootTest
@ActiveProfiles("test")

class EmailServiceTest {

	@Autowired
	private EmailService emailService;
	
	@Rule
    public SmtpServerRule smtpServerRule = new SmtpServerRule(587);
	
	@Test
    public void sendSimpleMessageTest() throws MessagingException, IOException {
		 SimpleMailMessage message = new SimpleMailMessage(); 
		 
		 String to="info@mail.com";
		 String subject="Spring Mail Testing";
		 String text="It's a mail to test email service using Junit";
		 message.setFrom("no-reply@mail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        
        emailService.sendSimpleMessage(to,subject,text);
       
      //  assertTrue(smtpServerRule.wait(5000, 1));
        MimeMessage[] receivedMessages = smtpServerRule.getMessages();
        assertEquals(1, receivedMessages.length);

        MimeMessage current = receivedMessages[0];

        assertEquals(message.getSubject(), current.getSubject());
        assertEquals(message.getTo(), current.getAllRecipients()[0].toString());
        assertTrue(String.valueOf(current.getContent()).contains(message.getText()));

    }
	

}
