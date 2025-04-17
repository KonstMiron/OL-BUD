<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "al.cawa84@gmail.com"; // ⚡️ ЗАМІНИ НА СВОЮ ПОШТУ
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $body = "Imię i Nazwisko: $name\nTelefon: $phone\nEmail: $email\nWiadomość:\n$message";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana pomyślnie!";
    } else {
        echo "Błąd podczas wysyłania wiadomości.";
    }
} else {
    echo "Nieprawidłowa metoda przesyłania!";
}
?>