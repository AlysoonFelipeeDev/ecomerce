import { ShoppingCartIcon } from "lucide-react"
import styled from "styled-components"
import { useAppSelector } from "../store/reduxHooks"

export function Header(){
    const items = useAppSelector(state => state.cart.items)
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)
    
    return (
        <ContainerHeader>
            <Brand>
                <Logo>Shop</Logo>
                <Tagline>Produtos</Tagline>
            </Brand>
            <Actions>
                <CartButton>
                <ShoppingCartIcon/>
                <CartLabel>Carrinho</CartLabel>
                <Notice>{itemCount}</Notice>
                </CartButton>
            </Actions>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: #f8f9fa;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
    position: sticky;
    top: 0;
    z-index: 10;
`

const Brand = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
`

const Logo = styled.span`
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    background: linear-gradient(90deg, #e94560, #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

const Tagline = styled.span`
    font-size: 0.75rem;
    font-weight: 500;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.12em;
`

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.55rem 0.85rem;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: #f8f9fa;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.15s ease;

    &:hover {
        background: rgba(233, 69, 96, 0.35);
    }

    &:active {
        transform: scale(0.97);
    }
`

const CartLabel = styled.span`
    font-size: 0.85rem;
    font-weight: 600; 
`

const Notice = styled.div`
    min-width: 1.35rem;
    height: 1.35rem;
    padding: 0 0.35rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    border-radius: 999px;
    background: #e94560;
    color: #fff;
`