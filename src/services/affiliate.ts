import { AxiosResponse } from 'axios';
import {
  AffiliateTransactionEntity,
  MyAffiliateInfo,
  PackageAffiliateEntity,
  AffiliateReferralHistoryEntity,
  TransactionInfo,
} from '../interfaces/affiliate';
import {
  BaseResponse,
  BaseResponsePagination,
  PaginationParam,
} from '../interfaces/common';
import request from './request';

export const getPackagesAffiliateService = (): Promise<
  AxiosResponse<BaseResponse<PackageAffiliateEntity[]>>
> =>
  request({
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    url: `/api/v1/affiliate/package`,
    method: 'GET',
  });

export const getMyAffiliateInfoService = (): Promise<
  AxiosResponse<BaseResponse<MyAffiliateInfo>>
> =>
  request({
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    url: `/api/v1/affiliate/info`,
    method: 'GET',
  });

export const updatePresentAffiliateCodeService = (params: {
  presenterCode: string;
}): Promise<AxiosResponse<BaseResponse<string>>> =>
  request({
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    url: `/api/v1/affiliate/affiliate`,
    method: 'POST',
    data: params,
  });

export const getAffiliateTransactionService = (
  params: PaginationParam,
): Promise<
  AxiosResponse<BaseResponsePagination<AffiliateTransactionEntity[]>>
> =>
  request({
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    url: `/api/v1/affiliate/transaction/history`,
    method: 'GET',
    params,
  });

export const getAffiliateReferralHistoryService = (
  params: PaginationParam,
): Promise<
  AxiosResponse<BaseResponsePagination<AffiliateReferralHistoryEntity[]>>
> =>
  request({
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    url: `/api/v1/affiliate/referral/history`,
    method: 'GET',
    params,
  });

export const getAffiliateTransactionInfoService = (): Promise<
  AxiosResponse<BaseResponsePagination<TransactionInfo>>
> =>
  request({
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    url: `/api/v1/affiliate/transaction/info`,
    method: 'GET',
  });
