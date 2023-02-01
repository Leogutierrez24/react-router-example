import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdata } from "./data/blogdata";

export function BlogPost(){
    const navigate = useNavigate();
    const auth = useAuth();
    const { slug } = useParams();

    const blogpost = blogdata.find(post => post.slug === slug);

    const returnToBlog = () => {
        navigate("/blog");
    }

    return(
        <>
            <h2>{blogpost.title}</h2>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
            <button type="button" onClick={returnToBlog}>Volver al blog</button>
            {
                auth.user?.role === "ADMIN" && (
                    <button>Eliminar Blogpost</button>
                )
            }
        </>
    );
}