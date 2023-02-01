import React from "react";
import { Link, Outlet, Navigate, useLocation } from "react-router-dom";
import { blogdata } from "./data/blogdata";
import { useAuth } from "./auth";

export function Blog(){
    const auth = useAuth();
    const location = useLocation();

    return(
        <>
            <h1>Blog page</h1>
            <ul>
                {
                    blogdata.map((post) => {
                        return <BlogLink key={post.title} post={post} />})
                    }
            </ul>
            <Outlet />
            {
                auth.user === null && (<Link to="/login" state={{ from: location }}>Iniciar sesión</Link>)
            }
        </>
    );
}

function BlogLink({ post }){
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}