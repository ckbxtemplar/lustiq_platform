"use client"
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Breadcrumb() {

	const paths = usePathname()
	const pathNames = paths.split('/').filter( path => path )
	if (!pathNames.includes("dashboard")) pathNames.unshift("home")
	const listClasses = '';
	const capitalizeLinks = true;
	const activeClasses = 'active';
	const separator = <li className="breadcrumb_item">/</li>;
	return (						
	<ul className="breadcrumb_nav unordered_list">
		{
				pathNames.map( (link, index) => {
						let href = `/${pathNames.slice(0, index + 1).join('/')}`
						let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
						let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
						return (
								<React.Fragment key={index}>
									<li className={itemClasses} >
										{pathNames.length !== index + 1 ? (
											<Link href={href}>{itemLink}</Link>
										) : (
											itemLink
										)}
									</li>										
								</React.Fragment>
						)
				})
		}
	</ul>
	)}