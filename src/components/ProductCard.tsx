import styled from "styled-components"
import type { Product } from "../types"
import { useAppDispatch } from "../store/reduxHooks"
import { addItem } from "../store/cartSlice"

export function ProductCard({id, name, price, imageUrl, category}: Product){
    const dispatch = useAppDispatch()
    function handleSaveCart(){
        dispatch(addItem({id, name, price, imageUrl, category, quantity: 1}))
    }
    return (
        <Card>
            <ImageWrap>
                <Image src={imageUrl} alt={name} loading="lazy" />
                <Category>{category}</Category>
            </ImageWrap>
            <Body>
                <Title>{name}</Title>
                <PriceRow>
                <Currency>R$</Currency>
                <Price>{price}</Price>
                </PriceRow>
                <AddButton type="button" onClick={handleSaveCart}>Adicionar ao carrinho</AddButton>
            </Body>
        </Card>
    )
}

const Card = styled.article`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(22, 33, 62, 0.08);
    border: 1px solid rgba(22, 33, 62, 0.06);
    transition: box-shadow 0.25s ease, transform 0.2s ease;

    &:hover {
    box-shadow: 0 14px 40px rgba(22, 33, 62, 0.12);
    transform: translateY(-2px);
    }
`
const ImageWrap = styled.div`
    position: relative;
    aspect-ratio: 1;
    background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%);
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`

const Category = styled.span`
    position: absolute;
    top: 0.65rem;
    left: 0.65rem;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    background: rgba(26, 26, 46, 0.85);
    color: #f8f9fa;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding: 1rem 1.1rem 1.15rem;
    flex: 1;
`

const Title = styled.h3`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.35;
    color: #1e293b;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const PriceRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
    margin-top: auto;
`

const Currency = styled.span`
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
`

const Price = styled.span`
    font-size: 1.25rem;
    font-weight: 800;
    color: #e94560;
    letter-spacing: -0.02em;
`

const AddButton = styled.button`
    width: 100%;
    margin-top: 0.25rem;
    padding: 0.65rem 1rem;
    border: none;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    box-shadow: 0 4px 14px rgba(26, 26, 46, 0.25);
    transition: filter 0.2s ease, transform 0.15s ease;

    &:hover {
        filter: brightness(1.08);
    }

    &:active {
        transform: scale(0.98);
    }
`