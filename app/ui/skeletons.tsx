// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function DashboardProfileSkeleton(){
	return (<>
	<main className="page_content">
	<section className="page_banner py-5 bg-light">
			<div className="container">
					<div className="content_wrapper placeholder-glow">
							<div className="row align-items-center">
									<div className="col-md-6">
											<p className="placeholder col-6"></p>
											<h1 className="placeholder col-8"></h1>
											<p className="placeholder col-10"></p>
											<ul className="list-inline">
													<li className="placeholder col-3"></li>
													<li className="placeholder col-3"></li>
											</ul>
									</div>
							</div>
					</div>
			</div>
	</section>
	<section className="my-5" id="section_personal_data">
			<div className="container">
					<div className="row justify-content-center">
							<div className="col-lg-6">
									<div className="iconbox_item placeholder-glow">
											<h3 className="placeholder col-6"></h3>
											<p className="placeholder col-10"></p>
									</div>
										<div className="register_form py-5">
												<div className="row">
														<div className="col-12">
																<p className="placeholder col-4"></p>
																<input type="text" className="form-control placeholder-wave" disabled/>
														</div>
														<div className="col-12 mt-3">
																<button type="button" className="btn btn-dark disabled placeholder col-4"></button>
														</div>
												</div>
										</div>
							</div>
					</div>
			</div>
	</section>
</main></>);
}

export function GridListSkeleton(){
	return (<>
      <div className="filter_topbar">
				<p className="filter_result placeholder-glow"><span className="placeholder w-100px"></span></p>
        <ul className="filter_buttons_list unordered_list">
          <li className="d-none">
            <button type="button" className="offCanvas_open_btn">
              <i className="fas fa-filter"></i>
              <span className="placeholder col-3"></span>
            </button>
          </li>
          <li>
            <div className="form_item m-0">
              <select name="sorting" defaultValue={"sorting"}>
                <option className="placeholder col-6"></option>
                <option className="placeholder col-8"></option>
                <option className="placeholder col-8"></option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className="row">
				<GridItemSkeleton/>
				<GridItemSkeleton/>
				<GridItemSkeleton/>
      </div>
	</>);
}

function GridItemSkeleton(){
	return (    
		<div className="col col-lg-4">
			<div className="course_card">
				{/* Image Skeleton */}
				<div className="item_image placeholder-glow">
					<div
						className="placeholder w-100"
						style={{ height: "150px", backgroundColor: "#e0e0e0" }}
					></div>
				</div>

				<div className="item_content">
					{/* Category & Price Skeleton */}
					<div className="d-flex align-items-center justify-content-between mb-3">
						<ul className="item_category_list unordered_list placeholder-glow">
							<li>
								<span className="placeholder col-4"></span>
							</li>
						</ul>
						<div className="item_price placeholder-glow">
							<span className="placeholder col-3"></span>
							<del className="placeholder col-2"></del>
						</div>
					</div>

					{/* Meta Info Skeleton */}
					<ul className="meta_info_list unordered_list placeholder-glow">
						<li>
							<span className="placeholder col-5"></span>
						</li>
						<li>
							<span className="placeholder col-4"></span>
						</li>
						<li>
							<span className="placeholder col-6"></span>
						</li>
					</ul>

					{/* Title Skeleton */}
					<h3 className="item_title placeholder-glow">
						<span className="placeholder col-8"></span>
					</h3>

					{/* Button Skeleton */}
					<a className="btn_unfill disabled placeholder col-6">
						<span className="placeholder col-4"></span>
					</a>
				</div>
			</div>
		</div>		
	);
}

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="sm:grid-cols-13 mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function Kaki() { return (<div>kaki</div>) }

export function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
