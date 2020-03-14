# react-csv-export
This is react-csv-export for exporting data to csv file

## Getting Started
```
npm install react-csv-export --save

import CsvLink from 'react-csv-export';
```

## Demo
https://cicada1992.github.io/react-csv-export/

Click the **Export CSV** Button in demo. You can see downloaded csv file.

## Props
| Property | Type | Required? | Description | Default Value 
|:---|:---|:---:|:---|:---|
| data | any[] | ✓ | What you want to export data
| filename | string | ✓ | Filename
| withTimeStamp | boolean |  | Concatenate utc time stamp behind the file name (example: `demo_export_1584169283290`) | false
| skipHeader | boolean |  | Skip header and export only real data | false
| skipEmptyLines | boolean |  | Skip Empty lines | false
| onClick | () => void |  | Handler on clicking export link

## Example
```
<CsvLink data={data} fileName="demo_export" withTimeStamp>
  <button>Export CSV</button>
</CsvLink>
```