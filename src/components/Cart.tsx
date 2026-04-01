import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../store/reduxHooks"
import { decreaseQuantity, increaseQuantity, removeItem } from "../store/cartSlice"

export function Cart() {
    const items = useAppSelector(state => state.cart.items)
    const dispatch = useAppDispatch()
    const handleRemoveItem = (id: string) => { dispatch(removeItem(id))}
    const handleIncreaseQuantity = (id: string) => {dispatch(increaseQuantity(id))}
    const handleDecreaseQuantity = (id: string) => {dispatch(decreaseQuantity(id))}
    const total = items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)

    return (
        <Panel aria-label="Carrinho de compras">
            <PanelHeader>
            <PanelTitle>Seu carrinho</PanelTitle>
            <PanelSubtitle>{items.length === 0 ? "Adicione items ao seu carrinho!" :"Revise os itens antes de finalizar."}</PanelSubtitle>
            </PanelHeader>
            <ItemList>
                {items.map((item) => (
                    <Item key={item.id}>
                    <Thumb src={item.imageUrl} alt={item.name} />
                    <ItemMain>
                        <ItemTop>
                        <ItemTitle>{item.name}</ItemTitle>
                        <RemoveBtn type="button" onClick={() => handleRemoveItem(item.id)}>Remover</RemoveBtn>
                        </ItemTop>
                        <ItemBottom>
                        <div>
                            <UnitPrice>R$ {item.price} / un.</UnitPrice>
                            <QtyWrap aria-label="Quantidade">
                            <QtyBtn type="button" aria-label="Diminuir quantidade" onClick={() => handleDecreaseQuantity(item.id)}>
                                −
                            </QtyBtn>
                            <QtyValue>{item.quantity}</QtyValue>
                            <QtyBtn type="button" aria-label="Aumentar quantidade" onClick={() => handleIncreaseQuantity(item.id)}>
                                +
                            </QtyBtn>
                            </QtyWrap>
                        </div>
                        <LineTotal>R$ {Number(item.price) * item.quantity}</LineTotal>
                        </ItemBottom>
                    </ItemMain>
                    </Item>
                ))}
            </ItemList>
            <Footer>
            <TotalRow>
                <TotalLabel>Total</TotalLabel>
                <TotalValue>R$ {total.toFixed(2)}</TotalValue>
            </TotalRow>
            <CheckoutBtn type="button">Finalizar compra</CheckoutBtn>
            </Footer>
    </Panel>
    )
}

const Panel = styled.aside`
    width: min(100%, 380px);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 100px);
    background: #fff;
    border-left: 1px solid #e2e8f0;
    box-shadow: -8px 0 32px rgba(22, 33, 62, 0.06);
`

const PanelHeader = styled.div`
    padding: 1.15rem 1.25rem;
    border-bottom: 1px solid #e2e8f0;
    background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
`

const PanelTitle = styled.h2`
    margin: 0;
    font-size: 1.05rem;
    font-weight: 800;
    color: #1e293b;
    letter-spacing: -0.02em;
`

const PanelSubtitle = styled.p`
    margin: 0.35rem 0 0;
    font-size: 0.8rem;
    color: #64748b;
`

const ItemList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0.75rem;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`

const Item = styled.li`
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 0.65rem;
    padding: 0.65rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    background: #fafafa;
`

const Thumb = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 8px;
    object-fit: cover;
    background: #e2e8f0;
`

const ItemMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    min-width: 0;
`

const ItemTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
`

const ItemTitle = styled.span`
    font-size: 0.8rem;
    font-weight: 600;
    color: #334155;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const RemoveBtn = styled.button`
    flex-shrink: 0;
    padding: 0.2rem 0.45rem;
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: #e94560;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const ItemBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`

const UnitPrice = styled.span`
    font-size: 0.75rem;
    color: #64748b;
`

const QtyWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 0.35rem;
    background: #fff;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 0.15rem;
`

const QtyBtn = styled.button`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    background: #f1f5f9;
    color: #1e293b;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;

    &:hover {
        background: #e2e8f0;
    }
`

const QtyValue = styled.span`
    min-width: 1.5rem;
    text-align: center;
    font-size: 0.85rem;
    font-weight: 700;
    color: #1e293b;
`

const LineTotal = styled.span`
    font-size: 0.85rem;
    font-weight: 800;
    color: #e94560;
`

const Footer = styled.footer`
    padding: 1rem 1.25rem 1.25rem;
    border-top: 1px solid #e2e8f0;
    background: #f8fafc;
`

const TotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.85rem;
`

const TotalLabel = styled.span`
    font-size: 0.9rem;
    font-weight: 600;
    color: #475569;
`

const TotalValue = styled.span`
    font-size: 1.35rem;
    font-weight: 800;
    color: #1a1a2e;
    letter-spacing: -0.02em;
`

const CheckoutBtn = styled.button`
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(135deg, #e94560, #ff6b6b);
    box-shadow: 0 4px 16px rgba(233, 69, 96, 0.35);
    transition: filter 0.2s ease, transform 0.15s ease;

    &:hover {
        filter: brightness(1.05);
    }

    &:active {
        transform: scale(0.99);
    }
`