import {
    ToolsContainer,
    TitleTools,
    CardContainer
} from "./Tools.style";

import { Card } from "../Card/Card";

export function Tools() {
    return (
        <ToolsContainer>
            <TitleTools>Ferramentas</TitleTools>
            <CardContainer>
                <Card title="HTML" imageUrl="src/assets/imgs/Html.png"></Card>
                <Card title="CSS" imageUrl="src/assets/imgs/CSS.png"></Card>
                <Card title="JavaScript" imageUrl="src/assets/imgs/JS.png"></Card>
                <Card title="React" imageUrl="src/assets/imgs/React.png"></Card>
                <Card title="Git" imageUrl="src/assets/imgs/git.png"></Card>
                <Card title="GitHub" imageUrl="src/assets/imgs/githubgenericname.png"></Card>
                <Card title="C" imageUrl="src/assets/imgs/letra-c.png"></Card>
                <Card title="Java" imageUrl="src/assets/imgs/logo-java-256.png"></Card>
                <Card title="MySQL" imageUrl="src/assets/imgs/mysql.png"></Card>
                <Card title="NodeJS" imageUrl="src/assets/imgs/NodeLogo.png"></Card>
                <Card title="Python" imageUrl="src/assets/imgs/python.png"></Card>
            </CardContainer>
        </ToolsContainer>
    );
}