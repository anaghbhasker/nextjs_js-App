"use client";
import React, {  } from "react";
import {  TableContainer, TableHead, TableBody, TableRow, TableCell, Typography, Table } from "@mui/material";
import {  FormGroup, Input } from "reactstrap";


const permissions = [
    {
        name: "Deal",
        accordian: true,
    },
];

const basicPermissions = ["Read", "Update"];
const specialPermissions = ["Note", "Task","Meeting", "Email",  "Call", "Message", "Document"];
export default function Page() {
    return (
        <TableContainer sx={{ maxHeight: 450, flex: 1 }}>
            <Table
                sx={{ minWidth: 650, borderCollapse: "collapse", position: "relative", top: 0 }}
                size="small"
                aria-label="a dense table sticky table"
            >
                <TableHead className="sticky-table-head">
                    <TableRow sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
                        <TableCell sx={{ position: "sticky", left: 0, top: 0, background: "#FFFFFF", zIndex: 10 }}>
                            <Typography fontSize={14} fontWeight={600} textAlign={"center"} color={"#12344D"}>
                                Name
                            </Typography>
                        </TableCell>
                        <TableCell
                            colSpan={2}
                            sx={{
                                borderLeft: "1px solid rgba(224, 224, 224, 1)",
                                position: "sticky",
                                top: 0,
                                background: "#FFFFFF",
                                zIndex: 9,
                            }}
                        >
                            <Typography fontSize={14} fontWeight={600} textAlign={"center"} color={"#12344D"}>
                                Basic Access
                            </Typography>
                        </TableCell>
                        
                        <TableCell
                            colSpan={8}
                            sx={{
                                borderLeft: "1px solid rgba(224, 224, 224, 1)",
                                position: "sticky",
                                top: 0,
                                background: "#FFFFFF",
                                zIndex: 9,
                            }}
                        >
                            <Typography fontSize={14} fontWeight={600} textAlign={"center"} color={"#12344D"}>
                                Special Access
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ position: "sticky", top: "2.062rem", background: "#FFFFFF", zIndex: 9 }}>
                        {["", ...basicPermissions,...specialPermissions].map(
                            (permission, index) => (
                                <TableCell
                                    sx={{ borderLeft: index ? "1px solid rgba(224, 224, 224, 1)" : "" }}
                                    key={permission}
                                >
                                    <Typography
                                        color={"#576C7D"}
                                        whiteSpace={"nowrap"}
                                        fontWeight={500}
                                        textAlign={"center"}
                                    >
                                        {permission}
                                    </Typography>
                                </TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Managing Accordians */}
                    {permissions.map((permissionObj) => (
                        <TableRow
                            key={permissionObj.name}
                        >
                            <TableCell
                                sx={{ cursor: "pointer", position: "sticky", left: 0, background: "#FFFFFF", zIndex: 1 }}
                            >
                                <Typography
                                    component={"span"}
                                    color={"#576C7D"}
                                    whiteSpace={"nowrap"}
                                    fontSize={14}
                                    fontWeight={500}
                                >
                                    {permissionObj.name}
                                </Typography>
                            </TableCell>
                            {[...basicPermissions,  ...specialPermissions].map(
                                (permission) => (
                                    <TableCell sx={{ borderLeft: "0.5px solid rgba(224, 224, 224, 1)" }} key={permission}>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <div style={{ paddingLeft: 35 }}>
                                                <FormGroup
                                                    switch
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        margin: 0,
                                                        padding: 0,
                                                    }}
                                                >
                                                    <Input
                                                        style={{ width: 36, height: 18 }}
                                                        type="switch"
                                                        onClick={() => {}}
                                                    />
                                                </FormGroup>
                                            </div>
                                        </div>
                                    </TableCell>
                                )
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
