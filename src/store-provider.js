import { useReducer } from 'react';

let timer;

const doTimeout = ( callback, time ) => {

	clearTimeout( timer );

	timer = setTimeout(
		callback,
		time
	);

};

const StoreProvider = ( { store, initialState, children } ) => {

	const [ state, dispatch ] = useReducer(

		( state, options ) => {

			switch( options.type ) {

				case 'modal.reset' :

					return {
						...state,
						...{
							modal : initialState.modal
						}
					};

				case 'modal.delete' :

					return {
						...state,
						...{
							modal : {
								active : true,
								title : options.translations.strings.confirmDelete,
								body : (
									<p>
										<button
											{
												...{
													className : 'button button-error button-block',
													type : 'button',
													onClick : () => {

														if( options.callback && options.callback instanceof Function ){
															options.callback();
														}

													}
												}
											}
										>
											{ options.translations.strings.delete }
										</button>
									</p>
								)
							}
						}
					};

				case 'modal.default' :

					return {
						...state,
						...{
							modal : {
								active : options.active,
								title : options.title,
								body : options.body
							}
						}
					};

				default :

					throw new Error( 'Invalid context property'  );

			};

		},
		initialState
	);

	return (

		<store.Provider
			{
				...{
					value : {
						state,
						dispatch
					}
				}
			}
		>
			{ children }
		</store.Provider>

	);

};

export default StoreProvider;
