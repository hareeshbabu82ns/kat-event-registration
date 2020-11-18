import React from 'react'
import { Block } from 'baseui/block'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

const ExAddCard = () => {

  return (
    <FlexGrid maxWidth={['100%', '30rem']}
      backgroundColor='backgroundTertiary'
      padding='.7rem'
      flexGridColumnGap='scale800'
      flexGridColumnCount={2}
    >
      <FlexGridItem overrides={{
        Block: {
          style: ({ $theme }) => ({
            width: '13rem',
            flexGrow: 0,
          }),
        }
      }} >
        <img
          src="https://bit.ly/2jYM25F"
          alt="Woman paying for a purchase"
        />
      </FlexGridItem>
      <FlexGridItem display='flex' flexDirection='column'
        justifyContent='space-between'
        overrides={{
          Block: {
            style: ({ $theme }) => ({
              flexGrow: 1,
            }),
          }
        }} >
        <Block color='contentSecondary'
          font='LabelSmall'>Ship your code to production in just a few clicks. Get $100 free credit</Block>
        <Block
          color='contentTertiary'
          font='LabelXSmall'
          overrides={{
            Block: {
              style: {
                textTransform: 'uppercase',
              }
            },
          }}
        >Ads Via Carbon</Block>
      </FlexGridItem>
    </FlexGrid>
  )
}

export default ExAddCard