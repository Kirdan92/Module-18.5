var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
	<div className={'contactItem'}>
	    <img className={'contactImage'} src={'./images/profile.png'}/>
	    <div className={'contactInfo'}> 
	      <div className={'contactLabel'}>Imię:
		<p className={'contactLabelVal'}>
		  {this.props.item.firstName}
		</p>
	      </div> 
	       <div className={'contactLabel'}> Nazwisko:
		 <p className={'contactLabelVal'}>
		  {this.props.item.lastName}
		</p>
	      </div>
	      <a href={'mailto:' + this.props.item.email}>
		  {this.props.item.email}
	      </a>
	    </div>
	</div>
    )
  },
});
