"use client"; // This is a client component 👈🏽

import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { data, type Person } from "./makeData";

export default function Table() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name", //uses the default width from defaultColumn prop
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "email",
        header: "Email Address",
        // size: 200, //increase the width of this column
      },
      {
        accessorKey: "city",
        header: "City",
        // size: 120, //decrease the width of this column
      },
      {
        accessorKey: "city",
        header: "City",
        // size: 120, //decrease the width of this column
      },
      {
        accessorKey: "city",
        header: "City",
        // size: 120, //decrease the width of this column
      },
      {
        accessorKey: "city",
        header: "City",
        // size: 120, //decrease the width of this column
      },
      {
        accessorKey: "country",
        header: "Country",
        // size: 100, //decrease the width of this column
      },
      {
        accessorKey: "country",
        header: "Country",
        // size: 100, //decrease the width of this column
      },
      {
        accessorKey: "country",
        header: "Country",
        // size: 100, //decrease the width of this column
      },
      {
        accessorKey: "country",
        header: "Country",
        // size: 100, //decrease the width of this column
      },
      {
        accessorKey: "country",
        header: "Country",
        // size: 100, //decrease the width of this column
      },
      {
        accessorKey: "country",
        header: "Country",
        // size: 100, //decrease the width of this column
      },
      {
        accessorKey: "country",
        header: "Country",
        // size: 100, //decrease the width of this column
      }
    ],
    []
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      //optionally override the default column widths
      defaultColumn={{
        maxSize: 400,
        minSize: 80,
        size: 150, //default size is usually 180
      }}
      enableStickyHeader
      enableStickyFooter
      enableColumnResizing
      columnResizeMode="onChange" //default
      enableRowSelection
    />
  )
}
