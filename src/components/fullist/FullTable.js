import Header from '../utilities/Header';
import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'
import getData from './getData'
import Footer from '../utilities/Footer';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`
const serverData = [];

// Let's add a fetchData method to our Table component that will be used to fetch
// new data when pagination state changes
// We can also add a loading state to let our table know it's loading new data
function Table({
   columns,
   data,
   fetchData,
   loading,
   pageCount: controlledPageCount,
}) {
   const {
      getTableProps,
      getTableBodyProps,
      prepareRow,
      headers,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      // Get the state from the instance
      state: { pageIndex, pageSize },
   } = useTable(
      {
         columns,
         data,
         initialState: { pageIndex: 0 }, // Pass our hoisted table state
         manualPagination: true, // Tell the usePagination
         // hook that we'll handle our own data fetching
         // This means we'll also have to provide our own
         // pageCount.
         pageCount: controlledPageCount,
      },
      usePagination
   )

   // Listen for changes in pagination and use the state to fetch our new data
   React.useEffect(() => {
      fetchData({ pageIndex, pageSize })
   }, [fetchData, pageIndex, pageSize])


   // Render the UI for your table
   return (
      <>
         <table {...getTableProps()}>
            <thead>
               {headers.map(column => (
                  <th {...column.getHeaderProps()}>
                     {column.render('Header')}
                     <span>
                        {column.isSorted
                           ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                           : ''}
                     </span>
                  </th>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {page.map((row, i) => {
                  prepareRow(row)
                  return (
                     <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                           return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                     </tr>
                  )
               })}
               <tr>
                  {loading ? (
                     // Use our custom loading state to show a loading indicator
                     <td colSpan="10000">Loading...</td>
                  ) : (
                        <td colSpan="10000">
                           Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                results
                        </td>
                     )}
               </tr>
            </tbody>
         </table>
         {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
         <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
               {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
               {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
               {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
               {'>>'}
            </button>{' '}
            <span>
               Page{' '}
               <strong>
                  {pageIndex + 1} of {pageOptions.length}
               </strong>{' '}
            </span>
            <span>
               | Go to page:{' '}
               <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                     const page = e.target.value ? Number(e.target.value) - 1 : 0
                     gotoPage(page)
                  }}
                  style={{ width: '100px' }}
               />
            </span>{' '}
            <select
               value={pageSize}
               onChange={e => {
                  setPageSize(Number(e.target.value))
               }}
            >
               {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                     Show {pageSize}
                  </option>
               ))}
            </select>
         </div>
      </>
   )
}

function FullTable() {
   return (
      <div>
         <Header />
         <div className="container-div"> <Content /></div>
         <Footer />
      </div>
   );
}

function Content() {

   const columns = React.useMemo(
      () => [
         {
            Header: 'Task Name',
            accessor: 'name',
         },
         {
            Header: 'Times solved',
            accessor: 'times',
         },
         {
            Header: 'Link to task',
            accessor: 'link',
         },
         {
            Header: 'Last time solved',
            accessor: 'date',
         },
      ],
      []
   )

   // We'll start our table without any data
   const [data, setData] = React.useState([])
   const [loading, setLoading] = React.useState(false)
   const [pageCount, setPageCount] = React.useState(0)
   const fetchIdRef = React.useRef(0)

   React.useEffect(() => {
      (async () => setData(await getData()))();
   }, []);


   const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
      // This will get called when the table needs new data
      // You could fetch your data from literally anywhere,
      // even a server. But for this example, we'll just fake it.

      // Give this fetch an ID
      const fetchId = ++fetchIdRef.current

      // Set the loading state
      setLoading(true)


      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
         const startRow = pageSize * pageIndex
         const endRow = startRow + pageSize
         setData(serverData.slice(startRow, endRow))

         // Your server could send back total page count.
         // For now we'll just fake it, too
         setPageCount(Math.ceil(serverData.length / pageSize))

         setLoading(false)
      }

   }, [])

   return (
      <Styles>
         <Table
            columns={columns}
            data={data}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
         />
      </Styles>
   )
}

export default FullTable;