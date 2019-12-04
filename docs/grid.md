---
id: grid
title: Grid
sidebar_label: Grid
---

A powerful mobile-first grid system for laying out elements on a page.

## Grid options

<table>
  <thead>
    <tr>
      <th></th>
      <th>
        Extra small<br>
        <small>&lt;576px</small>
      </th>
      <th>
        Small<br>
        <small>≥576px</small>
      </th>
      <th>
        Medium<br>
        <small>≥768px</small>
      </th>
      <th>
        Large<br>
        <small>≥992px</small>
      </th>
      <th>
        Extra large<br>
        <small>≥1200px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Max container width</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th scope="row">Class prefix</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
    </tr>
    <tr>
      <th scope="row"># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th scope="row">Gutter width</th>
      <td colspan="5">32px (16px on each side of a column)</td>
    </tr>
    <tr>
      <th scope="row">Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th scope="row">Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
  </tbody>
</table>

## Examples

### Auto-layout columns

Default behavior for columns within a row is to continuously fill up the space
with the same width as their siblings.

<div class="row">
  <div class="col viz-block">One of three columns</div>
  <div class="col viz-block">Two of three columns</div>
  <div class="col viz-block">Three of three columns</div>
</div>

<br />

```html
<div class="row">
  <div class="col">One of three columns</div>
  <div class="col">Two of three columns</div>
  <div class="col">Three of three columns</div>
</div>
```

### Collapsed row

Removes padding of all child columns in a row.

<div class="row collapse">
  <div class="col viz-block">One of three columns</div>
  <div class="col viz-block">Two of three columns</div>
  <div class="col viz-block">Three of three columns</div>
</div>

<br />

```html
<div class="row collapse">
  <div class="col viz-block">One of three columns</div>
  <div class="col viz-block">Two of three columns</div>
  <div class="col viz-block">Three of three columns</div>
</div>
```

### Responsive columns

For grids that are the same from the smallest of devices to the largest, use the
.col and .col-\* classes. Specify a numbered class when you need a particularly
sized column; otherwise, feel free to stick to .col.

#### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the
.col and .col-\* classes. Specify a numbered class when you need a particularly
sized column; otherwise, feel free to stick to .col.

<div class="row">
  <div class="col viz-block">col</div>
  <div class="col viz-block">col</div>
  <div class="col viz-block">col</div>
  <div class="col viz-block">col</div>
</div>
<div class="row">
  <div class="col-8 viz-block">col-8</div>
  <div class="col-4 viz-block">col-4</div>
</div>

<br />

```html
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>
```

#### Stacked to horizontal

Using a single set of .col-sm-\* classes, you can create a basic grid system
that starts out stacked before becoming horizontal with at the small breakpoint
(sm).

<div class="row">
  <div class="col-sm-8 viz-block">col-sm-8</div>
  <div class="col-sm-4 viz-block">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm viz-block">col-sm</div>
  <div class="col-sm viz-block">col-sm</div>
  <div class="col-sm viz-block">col-sm</div>
</div>

<br />

```html
<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>
```

#### Mix and match

Don’t want your columns to simply stack in some grid tiers? Use a combination of
different classes for each tier as needed. See the example below for a better
idea of how it all works.

<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-12 col-sm-8 viz-block">.col-12 .col-sm-8</div>
  <div class="col-6 col-sm-4 viz-block">.col-6 .col-sm-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-6 col-sm-4 viz-block">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4 viz-block">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4 viz-block">.col-6 .col-sm-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-6 viz-block">.col-6</div>
  <div class="col-6 viz-block">.col-6</div>
</div>
