import {
    ContactSection,
    ContactDescription,
    ContactTitle,
    ContactP,
    GroupTop,
    ContactImg
} from "./Contact.style";


export function Contact() {
    return(
        <ContactSection>
            <ContactTitle>Vamos conversar?</ContactTitle>
            <GroupTop>
                <ContactDescription>
                    Ficarei feliz em saber mais sobre seus projetos e como <br/> podemos trabalhar juntos para torná-los realidade.
                </ContactDescription>
                <ContactP>+55(92)99494-6507</ContactP>
                <ContactP>samuelsantostta@gmail.com</ContactP>
            </GroupTop>
            <a href="https://www.linkedin.com/in/samuel-teixeira-917aa6266/" target="blank"><ContactImg src="src/assets/imgs/linkdln.png"/></a>
            <ContactP>© 2026 Samuel Santos. Todos os direitos reservados.</ContactP>
        </ContactSection>
    );
}