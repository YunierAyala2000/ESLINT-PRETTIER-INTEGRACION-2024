const Servidores = () => {
	const serversData = [
		{
			Order: 1,
			Name: 'SINAI',
			Server: '*******',
			Ip: '*****************',
		},
		{
			Order: 2,
			Name: 'MICROSIC',
			Server: '',
			Ip: '*******************',
		},
		{
			Order: 3,
			Name: 'HEMEPA',
			Server: '',
			Ip: '*********************',
		},
		{
			Order: 4,
			Name: 'COLMARIA',
			Server: '',
			Ip: '****************',
		},
		{
			Order: 5,
			Name: 'MARIAUXILIADORA FONSECA LA GUAJIRA',
			Server: '',
			Ip: '*****************',
		},
		{
			Order: 6,
			Name: 'MARIAUXILIADORA CIUDAD BOLIVAR',
			Server: '',
			Ip: '****************',
		},
		{
			Order: 7,
			Name: 'CONEXION 21',
			Server: '',
			Ip: '*******************',
		},
		{
			Order: 8,
			Name: 'SIEMPRE SERVER',
			Server: '*',
			Ip: '******************',
		},
	];

	const serverCss = {
		height: '75px',
		border: '2px solid',
		borderRadius: '10px',
		padding: '5px 5px',
		margin: '0px 0px 10px 5px',
		width: '340px',
	};

	return (
		<div className="row">
			<div className="col-md-6">
				<div className="box  box-primary">
					<div className="box-header with-border">
						<h3 className="box-title">SERVIDORES</h3>
					</div>

					<div className=" box-body">
						{serversData.map((x) => {
							return (
								<div
									className="col-md-6 mb-7"
									key={
										x.Order
									}
									style={
										serverCss
									}
								>
									<a
										href={
											x.Server
										}
										target="_self"
									>
										<div className="col-md-10">
											<div className=" form-group">
												<p
													style={{
														fontSize: '1.3rem',
														fontWeight: 'bold',
														marginBottom: '0px',
														color: 'black',
													}}
												>
													{' '}
													{
														x.Name
													}{' '}
												</p>
												<p
													style={{
														color: 'rgb(27, 179, 255)',
														fontWeight: 'bold',
														textDecoration: 'underline',
														fontSize: '1.5rem',
														marginBottom: '0px',
													}}
												>
													{
														x.Server
													}
												</p>
												<p
													style={{
														fontSize: '1.3rem',
														fontWeight: 'bold',
														color: 'black',
													}}
												>
													{
														x.Ip
													}
												</p>
											</div>
										</div>
										<div className="col-md-2">
											<div className="btn btn-primary">
												<i
													className="fa fa-tasks"
													aria-hidden="true"
												></i>
											</div>
										</div>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Servidores;
