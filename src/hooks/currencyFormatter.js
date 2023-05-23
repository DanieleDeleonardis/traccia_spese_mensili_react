import React, { useEffect, useState } from 'react'

export function currencyFormatter(amount) {
    return amount.toLocaleString('en-DE', {
        style: 'currency',
        currency: 'EUR',
        useGrouping: true,
        maximumFractionDigits: 0
    }).replace(",", ".");
}
    