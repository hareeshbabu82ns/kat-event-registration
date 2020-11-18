import React from 'react'

import { Block } from 'baseui/block'
import { Tag, KIND, VARIANT } from 'baseui/tag'
import { StarRating } from "baseui/rating";


const ExAirbnbCard = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Block
      overrides={{
        Block: {
          style: ({ $theme }) => {
            // console.log($theme.borders.border400)
            return {
              ...$theme.borders.border600,
              borderRadius: $theme.borders.radius300,
            }
          }
        }
      }}
      overflow='hidden' maxWidth={['100%', '30rem']}>
      <img src={property.imageUrl} alt={property.imageAlt} />

      <Block padding='scale800'>

        <Block display='flex' alignItems='baseline'>
          <Tag closeable={false}
            kind={KIND.green}
            variant={VARIANT.solid}>New</Tag>

          <Block
            color='contentSecondary'
            font='LabelSmall'
            marginLeft='scale200'
            overrides={{
              Block: {
                style: ({ $theme }) => {
                  return {
                    fontWeight: 'semibold',
                    letterSpacing: 'wide',
                    textTransform: 'uppercase',
                  }
                }
              }
            }}
          >
            {property.beds} beds &bull; {property.baths} baths
          </Block>
        </Block>

        <Block as='h4'
          marginTop='scale200'
          font='HeadingXSmall'
          overrides={{
            Block: {
              style: ({ $theme }) => {
                return {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',

                  fontWeight: 'semibold',
                  lineHeight: 'tight',
                }
              }
            }
          }}
        >
          {property.title}
        </Block>

        <Block>
          {property.formattedPrice}
          <Block as='span' color='contentTertiary'
            font='LabelSmall'>
            / wk
          </Block>
        </Block>
        <Block display='flex' marginTop='scale400' alignItems='center'>
          <StarRating numItems={5} value={property.rating}
            size={18} overrides={{
              Item: {
                style: {
                  marginRight: '1px'
                }
              }
            }} />
          <Block as='span' marginLeft='scale400' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Block>
        </Block>
      </Block>

    </Block>
  )
}

export default ExAirbnbCard