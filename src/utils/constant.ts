import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


export const ACCESS_TOKEN_KEY = 'auth/token';

const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  
export const exportToCSV = (dataExport:any,name:string) => {
    const ws = XLSX.utils.json_to_sheet(dataExport);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, `${name}-${new Date().toLocaleString()}` + fileExtension);
  };

export const cutWallet = (wallet:string) =>{
    if(!wallet){
      return ""
    }
    return `${wallet.substring(0,4)}...${wallet.substring(wallet.length - 4, wallet.length)}`
}