import styled, { createGlobalStyle } from "styled-components";
import { ProductCard } from "../components/ProductCard";
import { Header } from "../components/Header";
import { Cart } from "../components/Cart";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";

export function Home() {
    const {products, isError, isLoading} = useProducts()
    const [modalCart, setModalCart] = useState<boolean>(false)
    if(isLoading) return <div>CARREGANDO...</div>
    if(isError) return <div>Algo deu errado</div>

    return (
        <>
            <GlobalStyle />
            <Page>
                <Header onCartClick={() => setModalCart(!modalCart)}/>
                <Body>
                    <Main>
                        <MainHeader>
                        <PageTitle>Catálogo</PageTitle>
                        </MainHeader>
                        <Grid>
                            {products.map(prod => (
                                <ProductCard
                                id={prod.id}
                                key={prod.id}
                                imageUrl={prod.imageUrl}
                                category={prod.category}
                                name={prod.name}
                                price={prod.price}
                                />
                            ))}
                        </Grid>
                    </Main>
                    {modalCart && <Cart />}
                </Body>
            </Page>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        min-height: 100vh;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        background: #f1f5f9;
        color: #1e293b;
        -webkit-font-smoothing: antialiased;
    }

    #root {
        min-height: 100vh;
    }
`


const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Body = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`

const Main = styled.main`
    flex: 1;
    min-width: 0;
    padding: 1.5rem clamp(1rem, 3vw, 2rem) 2rem;
    overflow-y: auto;
`

const MainHeader = styled.div`
    margin-bottom: 1.35rem;
`

const PageTitle = styled.h1`
    margin: 0;
    font-size: clamp(1.35rem, 2.5vw, 1.75rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #1a1a2e;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.25rem;
`