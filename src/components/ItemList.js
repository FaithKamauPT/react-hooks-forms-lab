constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleSearchChange}
        />
        {/* Rest of the component */}
      </div>
    );
  }
  
    const filteredItems = this.props.items.filter((item) =>
      item.name.includes(this.state.searchText)
    );
  
    return (
      <div>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleSearchChange}
        />
        {/* Render the filtered items */}
        {filteredItems.map((item) => (
          // Render item component
        ))}
      </div>
    );
  
  