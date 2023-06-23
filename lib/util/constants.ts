import { ChainId } from '@intimefinance/smart-order-router'

export type AddressMap = { [chainId: number]: string }

export const V2_CORE_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.CORE_TEST]: '0x7f7ad80Cb22c591e1064d96c9A076a47C3374f08',
}
