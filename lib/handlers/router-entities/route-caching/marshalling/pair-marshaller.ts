import { Pair } from '@intimefinance/v2-sdk'
import { CurrencyAmountMarshaller, MarshalledCurrencyAmount } from './currency-amount-marshaller'
import { Protocol } from '@intimefinance/router-sdk'
import { V2_CORE_FACTORY_ADDRESSES } from '../../../../util/constants'

export interface MarshalledPair {
  protocol: Protocol
  currencyAmountA: MarshalledCurrencyAmount
  tokenAmountB: MarshalledCurrencyAmount
}

export class PairMarshaller {
  public static marshal(pair: Pair): MarshalledPair {
    return {
      protocol: Protocol.V2,
      currencyAmountA: CurrencyAmountMarshaller.marshal(pair.reserve0),
      tokenAmountB: CurrencyAmountMarshaller.marshal(pair.reserve1),
    }
  }

  public static unmarshal(marshalledPair: MarshalledPair): Pair {
    return new Pair(
      V2_CORE_FACTORY_ADDRESSES[marshalledPair.currencyAmountA.currency.chainId] as string,
      CurrencyAmountMarshaller.unmarshal(marshalledPair.currencyAmountA),
      CurrencyAmountMarshaller.unmarshal(marshalledPair.tokenAmountB)
    )
  }
}
