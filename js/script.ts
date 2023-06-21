import { SpoolSdk, SpoolSdkParameters } from '@spool.fi/spool-sdk';
import { Signer } from 'ethers';

import { BaseProvider } from '@ethersproject/providers';

const providerOrSigner: BaseProvider | Signer = test;
const params: SpoolSdkParameters = test;

const sdk = new SpoolSdk(providerOrSigner, params);
