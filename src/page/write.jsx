import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { WriteContainer, WriteInner, WriteForm, Title, Content} from "../style/writeStyle";
import axios from "axios";

const Write = (props) => {
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const isTitleFilled = title.trim().length > 0;
    const isContentFilled = content.trim().length > 0;

    return (
        <>
            <WriteContainer>
                <WriteInner>
                    <WriteForm onSubmit={handleSubmit}>
                        <Title className={isTitleFilled ? "filled" : ""}>
                            <h1>제목</h1>
                            <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            />
                        </Title>
                        <Content className={isContentFilled ? "filled" : ""}>
                            <h2>내용</h2>
                            <textarea 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            />
                        </Content>
                        <input type="submit" value="글 올리기" />
                    </WriteForm>
                </WriteInner>
            </WriteContainer>
        </>
    );
}

export default Write;