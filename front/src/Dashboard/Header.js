import React from 'react';
import MathJax from 'react-mathjax'

const Header = props => {
	return(
		<div>
			<div className="fz36">
				Poject Euler #36
			</div>
			<div className="mt-3 fz24">
				Description
			</div>
			<div className="mt-3 fz20">
				<MathJax.Provider>
					<div>
						The decimal number, <MathJax.Node inline formula={'585 = 1001001001_2'}/>  (binary), is palindromic in both bases.
						<br />Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2
					</div>
				</MathJax.Provider>
			</div>
		</div>
	)
}

export default Header