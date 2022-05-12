import { Container } from "./styles";

const Button = ({ children, GreenSchema = false, ...rest }) => {
    return (
        <Container GreenSchema={GreenSchema} type="button" {...rest}>
            {children}
        </Container>
    )
};

export default Button;
