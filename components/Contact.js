var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: './images/profile.png'
        }),
        React.createElement('div', {className: 'contactInfo'},
	        React.createElement('div', {className: 'contactLabel'}, 'Imię: ' ,
	        	React.createElement ('p', {className: 'contactLabelVal'}, this.props.item.firstName)),
	        React.createElement('div', {className: 'contactLabel'}, 'Nazwisko: ',
	        	React.createElement ('p', {className: 'contactLabelVal'}, this.props.item.lastName)),
	        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
	          this.props.item.email
	        )
        )
      )
    )
  },
});