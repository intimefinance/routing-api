import { Protocol } from '@intimefinance/router-sdk'
import { ChainId } from '@intimefinance/smart-order-router'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
