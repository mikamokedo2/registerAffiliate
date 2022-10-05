export interface PackageAffiliateEntity {
    id: string;
    name: string;
    icon: string;
    description: string;
    limits: number;
    profit: number;
    active: boolean;
  }

  interface Referral{
  phoneNumber: string;
  walletCode: string;
  affCode: string;
  total: number;
  }
  
  export interface MyAffiliateInfo {
    packageId: string;
    packageName: string;
    packageIcon: string;
    packageLimits: number;
    packageProfit: number;
    affCode: number;
    linkRef: string;
    presenterCode: string;
    profitF1: number;
    profitF2: number;
    totalRefernal: number;
    totalProfit: number;
    totalProfitHour: number;
    topRefernal:Referral[];
    topProfit:Referral[];
  }
  
  export interface AffiliateTransactionEntity {
    phoneNumber: string;
    profit: number;
    createDate: string;
  }
  
  export interface AffiliateReferralHistoryEntity {
    phoneNumber: string;
    profit: number;
    createDate: string;
  }
  
  export interface TransactionInfo {
    profits: {
      id: string;
      profit: number;
      createDate: string;
    }[];
    today: number;
    percent: number;
  }
  