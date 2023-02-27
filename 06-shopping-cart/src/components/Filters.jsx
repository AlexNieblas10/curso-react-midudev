import { useState, useId, useContext } from "react";
import { FiltersContext } from "../context/filters";
import "../styles/filter.css";

export function Filters() {
	const { setFilters, filters } = useContext(FiltersContext);
	const minPriceFiltersId = useId();
	const categoryFiltersId = useId();

	const handleMinPrice = (e) => {
		setFilters((prevState) => ({
			...prevState,
			minPrice: e.target.value,
		}));
	};

	const handleChangeCategory = (e) => {
		setFilters((prevState) => ({
			...prevState,
			category: e.target.value,
		}));
	};

	return (
		<section className="filters">
			<div>
				<label htmlFor={minPriceFiltersId}>Price: </label>
				<input
					type="range"
					id={minPriceFiltersId}
					min={0}
					max={1000}
					onChange={handleMinPrice}
					value={filters.minPrice}
				/>
				<p>{filters.minPrice}</p>
			</div>

			<div>
				<label htmlFor={categoryFiltersId}>Category</label>
				<select id={categoryFiltersId} onChange={handleChangeCategory}>
					<option value="all">All</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">smartphones</option>
				</select>
			</div>
		</section>
	);
}
