const shipmentIconButton = document.querySelector('.product-shipment .product-section-header.sm-only .icon-button');

function openContent() {
  const shipment = this.parentNode.parentNode;

  shipment.classList.add('is-open');
}

shipmentIconButton.addEventListener('click', openContent);
