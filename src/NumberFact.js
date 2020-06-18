import React from 'react';


const NumberFact = (props) => {

	return (

		<article className="center mw5 mw6-ns hidden ba mv4">
		  <h1 className="tc f4 bg-dark-blue white mv0 pv2 ph3">{props.numberToDisplay + ' '} {props.topicToDisplay + ' '} fact</h1>
		  <div className="pa3 bt">
		    <p className="tc f6 f5-ns lh-copy measure mv0 dark-blue">
		      {props.factToDisplay}
		    </p>
		  </div>
		</article>

	);

}


export default NumberFact;
